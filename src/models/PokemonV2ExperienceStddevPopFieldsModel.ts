import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceStddevPopFieldsModelBase } from "./PokemonV2ExperienceStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceStddevPopFieldsModel */
export interface PokemonV2ExperienceStddevPopFieldsModelType extends Instance<typeof PokemonV2ExperienceStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceStddevPopFieldsModel */
export { selectFromPokemonV2ExperienceStddevPopFields, pokemonV2ExperienceStddevPopFieldsModelPrimitives, PokemonV2ExperienceStddevPopFieldsModelSelector } from "./PokemonV2ExperienceStddevPopFieldsModel.base"

/**
 * PokemonV2ExperienceStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ExperienceStddevPopFieldsModel = PokemonV2ExperienceStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
