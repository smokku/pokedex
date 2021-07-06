import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionStddevSampFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionStddevSampFieldsModel */
export interface PokemonV2MovedamageclassdescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionStddevSampFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionStddevSampFields, pokemonV2MovedamageclassdescriptionStddevSampFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovedamageclassdescriptionStddevSampFieldsModel = PokemonV2MovedamageclassdescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
