import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameStddevSampFieldsModelBase } from "./PokemonV2MoveattributenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameStddevSampFieldsModel */
export interface PokemonV2MoveattributenameStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveattributenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameStddevSampFieldsModel */
export { selectFromPokemonV2MoveattributenameStddevSampFields, pokemonV2MoveattributenameStddevSampFieldsModelPrimitives, PokemonV2MoveattributenameStddevSampFieldsModelSelector } from "./PokemonV2MoveattributenameStddevSampFieldsModel.base"

/**
 * PokemonV2MoveattributenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveattributenameStddevSampFieldsModel = PokemonV2MoveattributenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
