import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassStddevSampFieldsModelBase } from "./PokemonV2MovedamageclassStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassStddevSampFieldsModel */
export interface PokemonV2MovedamageclassStddevSampFieldsModelType extends Instance<typeof PokemonV2MovedamageclassStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassStddevSampFieldsModel */
export { selectFromPokemonV2MovedamageclassStddevSampFields, pokemonV2MovedamageclassStddevSampFieldsModelPrimitives, PokemonV2MovedamageclassStddevSampFieldsModelSelector } from "./PokemonV2MovedamageclassStddevSampFieldsModel.base"

/**
 * PokemonV2MovedamageclassStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovedamageclassStddevSampFieldsModel = PokemonV2MovedamageclassStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
