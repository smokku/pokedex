import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextStddevPopFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextStddevPopFieldsModel */
export interface PokemonV2PokemonspeciesflavortextStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextStddevPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextStddevPopFields, pokemonV2PokemonspeciesflavortextStddevPopFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspeciesflavortextStddevPopFieldsModel = PokemonV2PokemonspeciesflavortextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
