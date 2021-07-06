import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextVarianceFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextVarianceFieldsModel */
export interface PokemonV2PokemonspeciesflavortextVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextVarianceFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextVarianceFields, pokemonV2PokemonspeciesflavortextVarianceFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextVarianceFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspeciesflavortextVarianceFieldsModel = PokemonV2PokemonspeciesflavortextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
