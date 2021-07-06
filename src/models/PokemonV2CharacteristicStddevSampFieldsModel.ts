import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicStddevSampFieldsModelBase } from "./PokemonV2CharacteristicStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicStddevSampFieldsModel */
export interface PokemonV2CharacteristicStddevSampFieldsModelType extends Instance<typeof PokemonV2CharacteristicStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicStddevSampFieldsModel */
export { selectFromPokemonV2CharacteristicStddevSampFields, pokemonV2CharacteristicStddevSampFieldsModelPrimitives, PokemonV2CharacteristicStddevSampFieldsModelSelector } from "./PokemonV2CharacteristicStddevSampFieldsModel.base"

/**
 * PokemonV2CharacteristicStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2CharacteristicStddevSampFieldsModel = PokemonV2CharacteristicStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
