import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceMinFieldsModelBase } from "./PokemonV2ExperienceMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceMinFieldsModel */
export interface PokemonV2ExperienceMinFieldsModelType extends Instance<typeof PokemonV2ExperienceMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceMinFieldsModel */
export { selectFromPokemonV2ExperienceMinFields, pokemonV2ExperienceMinFieldsModelPrimitives, PokemonV2ExperienceMinFieldsModelSelector } from "./PokemonV2ExperienceMinFieldsModel.base"

/**
 * PokemonV2ExperienceMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ExperienceMinFieldsModel = PokemonV2ExperienceMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
