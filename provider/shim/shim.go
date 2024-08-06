package shim

import (
	"github.com/hashicorp/terraform-plugin-sdk/v2/helper/schema"
	"github.com/maxlaverse/terraform-provider-bitwarden/internal/provider"
)

func NewProvider() *schema.Provider {
	p, _ := provider.New()
	return p
}
