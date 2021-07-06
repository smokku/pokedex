import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextMaxFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextMaxFieldsModel */
export interface PokemonV2PokemonspeciesflavortextMaxFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextMaxFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextMaxFields, pokemonV2PokemonspeciesflavortextMaxFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextMaxFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesflavortextMaxFieldsModel = PokemonV2PokemonspeciesflavortextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
