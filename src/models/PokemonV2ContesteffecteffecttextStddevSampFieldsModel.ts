import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextStddevSampFieldsModelBase } from "./PokemonV2ContesteffecteffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextStddevSampFieldsModel */
export interface PokemonV2ContesteffecteffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextStddevSampFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextStddevSampFields, pokemonV2ContesteffecteffecttextStddevSampFieldsModelPrimitives, PokemonV2ContesteffecteffecttextStddevSampFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesteffecteffecttextStddevSampFieldsModel = PokemonV2ContesteffecteffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
