import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceStddevSampFieldsModelBase } from "./PokemonV2ExperienceStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceStddevSampFieldsModel */
export interface PokemonV2ExperienceStddevSampFieldsModelType extends Instance<typeof PokemonV2ExperienceStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceStddevSampFieldsModel */
export { selectFromPokemonV2ExperienceStddevSampFields, pokemonV2ExperienceStddevSampFieldsModelPrimitives, PokemonV2ExperienceStddevSampFieldsModelSelector } from "./PokemonV2ExperienceStddevSampFieldsModel.base"

/**
 * PokemonV2ExperienceStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ExperienceStddevSampFieldsModel = PokemonV2ExperienceStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
