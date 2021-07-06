import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceVarSampFieldsModelBase } from "./PokemonV2ExperienceVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceVarSampFieldsModel */
export interface PokemonV2ExperienceVarSampFieldsModelType extends Instance<typeof PokemonV2ExperienceVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceVarSampFieldsModel */
export { selectFromPokemonV2ExperienceVarSampFields, pokemonV2ExperienceVarSampFieldsModelPrimitives, PokemonV2ExperienceVarSampFieldsModelSelector } from "./PokemonV2ExperienceVarSampFieldsModel.base"

/**
 * PokemonV2ExperienceVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ExperienceVarSampFieldsModel = PokemonV2ExperienceVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
