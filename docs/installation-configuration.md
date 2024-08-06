---
title: Bitwarden Installation & Configuration
meta_desc: Information on how to install the Bitwarden provider.
layout: installation
---

## Installation

The Pulumi Bitwarden provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-bitwarden`](https://www.npmjs.com/package/@maienm/pulumi-bitwarden)
* Python: [`pulumi_bitwarden`](https://pypi.org/project/pulumi_bitwarden/)
* Go: [`github.com/MaienM/pulumi-bitwarden/sdk/go/bitwarden`](https://pkg.go.dev/github.com/MaienM/pulumi-bitwarden/sdk/go/bitwarden)
* .NET: [`MaienM.Bitwarden`](https://www.nuget.org/packages/MaienM.Bitwarden)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `bitwarden` provider:

- `bitwarden:apiKey` (environment: `bitwarden_API_KEY`) - the API key for `bitwarden`
- `bitwarden:region` (environment: `bitwarden_REGION`) - the region in which to deploy resources

### Provider Binary

The Bitwarden provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource bitwarden <version>
```

Replace the version string `<version>` with your desired version.
