import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionStddevSampFieldsModelBase } from "./PokemonV2CharacteristicdescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionStddevSampFieldsModel */
export interface PokemonV2CharacteristicdescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionStddevSampFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionStddevSampFields, pokemonV2CharacteristicdescriptionStddevSampFieldsModelPrimitives, PokemonV2CharacteristicdescriptionStddevSampFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2CharacteristicdescriptionStddevSampFieldsModel = PokemonV2CharacteristicdescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
