import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceVarPopFieldsModelBase } from "./PokemonV2ExperienceVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceVarPopFieldsModel */
export interface PokemonV2ExperienceVarPopFieldsModelType extends Instance<typeof PokemonV2ExperienceVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceVarPopFieldsModel */
export { selectFromPokemonV2ExperienceVarPopFields, pokemonV2ExperienceVarPopFieldsModelPrimitives, PokemonV2ExperienceVarPopFieldsModelSelector } from "./PokemonV2ExperienceVarPopFieldsModel.base"

/**
 * PokemonV2ExperienceVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ExperienceVarPopFieldsModel = PokemonV2ExperienceVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
