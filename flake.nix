{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    nixpkgs-go.url = "github:nixos/nixpkgs/8ad5e8132c5dcf977e308e7bf5517cc6cc0bf7d8";

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, nixpkgs-go, flake-utils, ... }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
      pkgs-go = nixpkgs-go.legacyPackages.${system};

      make = pkgs.writeShellApplication {
        name = "make";
        runtimeInputs = with pkgs; [ gnumake ];
        text = ''
          make "$@" SHELL=${pkgs.bash}/bin/bash
        '';
      };
    in
    {
      devShell = pkgs.mkShell {
        buildInputs = (with pkgs; [
          dotnet-sdk
          make
          nodePackages.yarn
          nodejs
          pulumi
          pulumictl
          python3
          typescript
        ]) ++ (with pkgs-go; [
          go
          gopls
          golangci-lint
        ]);
      };
    }
  );
}
