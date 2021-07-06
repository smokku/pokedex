import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextAvgFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextAvgFieldsModel */
export interface PokemonV2PokemonspeciesflavortextAvgFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextAvgFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextAvgFields, pokemonV2PokemonspeciesflavortextAvgFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextAvgFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspeciesflavortextAvgFieldsModel = PokemonV2PokemonspeciesflavortextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
