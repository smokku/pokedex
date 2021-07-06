import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeStddevSampFieldsModelBase } from "./PokemonV2MoveattributeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeStddevSampFieldsModel */
export interface PokemonV2MoveattributeStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveattributeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeStddevSampFieldsModel */
export { selectFromPokemonV2MoveattributeStddevSampFields, pokemonV2MoveattributeStddevSampFieldsModelPrimitives, PokemonV2MoveattributeStddevSampFieldsModelSelector } from "./PokemonV2MoveattributeStddevSampFieldsModel.base"

/**
 * PokemonV2MoveattributeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveattributeStddevSampFieldsModel = PokemonV2MoveattributeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
