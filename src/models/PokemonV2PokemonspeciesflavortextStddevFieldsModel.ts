import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextStddevFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextStddevFieldsModel */
export interface PokemonV2PokemonspeciesflavortextStddevFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextStddevFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextStddevFields, pokemonV2PokemonspeciesflavortextStddevFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextStddevFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspeciesflavortextStddevFieldsModel = PokemonV2PokemonspeciesflavortextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
