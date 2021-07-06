import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextStddevSampFieldsModelBase } from "./PokemonV2PokemonspeciesflavortextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextStddevSampFieldsModel */
export interface PokemonV2PokemonspeciesflavortextStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextStddevSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesflavortextStddevSampFields, pokemonV2PokemonspeciesflavortextStddevSampFieldsModelPrimitives, PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesflavortextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspeciesflavortextStddevSampFieldsModel = PokemonV2PokemonspeciesflavortextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
