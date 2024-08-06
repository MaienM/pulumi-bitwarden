{
  inputs = {
    template.url = "github:MaienM/pulumi-tf-provider-cookiecutter";
  };

  outputs = { template, ... }: template.inputs.flake-utils.lib.eachDefaultSystem (system: {
    devShells = template.devShells.${system};
  });
}
