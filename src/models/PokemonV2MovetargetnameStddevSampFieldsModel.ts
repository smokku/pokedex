import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameStddevSampFieldsModelBase } from "./PokemonV2MovetargetnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameStddevSampFieldsModel */
export interface PokemonV2MovetargetnameStddevSampFieldsModelType extends Instance<typeof PokemonV2MovetargetnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameStddevSampFieldsModel */
export { selectFromPokemonV2MovetargetnameStddevSampFields, pokemonV2MovetargetnameStddevSampFieldsModelPrimitives, PokemonV2MovetargetnameStddevSampFieldsModelSelector } from "./PokemonV2MovetargetnameStddevSampFieldsModel.base"

/**
 * PokemonV2MovetargetnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovetargetnameStddevSampFieldsModel = PokemonV2MovetargetnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
