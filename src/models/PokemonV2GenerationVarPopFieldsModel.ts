import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationVarPopFieldsModelBase } from "./PokemonV2GenerationVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationVarPopFieldsModel */
export interface PokemonV2GenerationVarPopFieldsModelType extends Instance<typeof PokemonV2GenerationVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationVarPopFieldsModel */
export { selectFromPokemonV2GenerationVarPopFields, pokemonV2GenerationVarPopFieldsModelPrimitives, PokemonV2GenerationVarPopFieldsModelSelector } from "./PokemonV2GenerationVarPopFieldsModel.base"

/**
 * PokemonV2GenerationVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GenerationVarPopFieldsModel = PokemonV2GenerationVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
