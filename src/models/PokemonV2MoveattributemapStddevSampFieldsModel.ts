import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapStddevSampFieldsModelBase } from "./PokemonV2MoveattributemapStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapStddevSampFieldsModel */
export interface PokemonV2MoveattributemapStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveattributemapStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapStddevSampFieldsModel */
export { selectFromPokemonV2MoveattributemapStddevSampFields, pokemonV2MoveattributemapStddevSampFieldsModelPrimitives, PokemonV2MoveattributemapStddevSampFieldsModelSelector } from "./PokemonV2MoveattributemapStddevSampFieldsModel.base"

/**
 * PokemonV2MoveattributemapStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveattributemapStddevSampFieldsModel = PokemonV2MoveattributemapStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
