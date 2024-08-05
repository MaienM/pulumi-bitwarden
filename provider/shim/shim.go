package shim

import (
	"github.com/MaienM/pulumi-bitwarden/provider/pkg/version"
	"github.com/hashicorp/terraform-plugin-sdk/v2/helper/schema"
	"github.com/maxlaverse/terraform-provider-bitwarden/internal/provider"
)

func NewProvider() *schema.Provider {
	return provider.New(version.Version)()
}
