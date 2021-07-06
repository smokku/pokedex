import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceAvgFieldsModelBase } from "./PokemonV2ExperienceAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceAvgFieldsModel */
export interface PokemonV2ExperienceAvgFieldsModelType extends Instance<typeof PokemonV2ExperienceAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceAvgFieldsModel */
export { selectFromPokemonV2ExperienceAvgFields, pokemonV2ExperienceAvgFieldsModelPrimitives, PokemonV2ExperienceAvgFieldsModelSelector } from "./PokemonV2ExperienceAvgFieldsModel.base"

/**
 * PokemonV2ExperienceAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ExperienceAvgFieldsModel = PokemonV2ExperienceAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
