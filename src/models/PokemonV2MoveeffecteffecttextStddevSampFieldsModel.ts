import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextStddevSampFieldsModelBase } from "./PokemonV2MoveeffecteffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextStddevSampFieldsModel */
export interface PokemonV2MoveeffecteffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextStddevSampFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextStddevSampFields, pokemonV2MoveeffecteffecttextStddevSampFieldsModelPrimitives, PokemonV2MoveeffecteffecttextStddevSampFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveeffecteffecttextStddevSampFieldsModel = PokemonV2MoveeffecteffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
