import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceStddevFieldsModelBase } from "./PokemonV2ExperienceStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceStddevFieldsModel */
export interface PokemonV2ExperienceStddevFieldsModelType extends Instance<typeof PokemonV2ExperienceStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceStddevFieldsModel */
export { selectFromPokemonV2ExperienceStddevFields, pokemonV2ExperienceStddevFieldsModelPrimitives, PokemonV2ExperienceStddevFieldsModelSelector } from "./PokemonV2ExperienceStddevFieldsModel.base"

/**
 * PokemonV2ExperienceStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ExperienceStddevFieldsModel = PokemonV2ExperienceStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
