import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceVarianceFieldsModelBase } from "./PokemonV2ExperienceVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceVarianceFieldsModel */
export interface PokemonV2ExperienceVarianceFieldsModelType extends Instance<typeof PokemonV2ExperienceVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceVarianceFieldsModel */
export { selectFromPokemonV2ExperienceVarianceFields, pokemonV2ExperienceVarianceFieldsModelPrimitives, PokemonV2ExperienceVarianceFieldsModelSelector } from "./PokemonV2ExperienceVarianceFieldsModel.base"

/**
 * PokemonV2ExperienceVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ExperienceVarianceFieldsModel = PokemonV2ExperienceVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
