import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextMinFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextMinFieldsModel */
export interface PokemonV2PokemonspeciesflavortextMinFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextMinFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextMinFields, pokemonV2PokemonspeciesflavortextMinFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextMinFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextMinFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspeciesflavortextMinFieldsModel = PokemonV2PokemonspeciesflavortextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
