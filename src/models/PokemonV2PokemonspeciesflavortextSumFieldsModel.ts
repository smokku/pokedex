import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextSumFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextSumFieldsModel */
export interface PokemonV2PokemonspeciesflavortextSumFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextSumFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextSumFields, pokemonV2PokemonspeciesflavortextSumFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextSumFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextSumFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspeciesflavortextSumFieldsModel = PokemonV2PokemonspeciesflavortextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
