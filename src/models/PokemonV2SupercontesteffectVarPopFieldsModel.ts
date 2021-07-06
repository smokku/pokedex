import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectVarPopFieldsModelBase } from "./PokemonV2SupercontesteffectVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectVarPopFieldsModel */
export interface PokemonV2SupercontesteffectVarPopFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectVarPopFieldsModel */
export { selectFromPokemonV2SupercontesteffectVarPopFields, pokemonV2SupercontesteffectVarPopFieldsModelPrimitives, PokemonV2SupercontesteffectVarPopFieldsModelSelector } from "./PokemonV2SupercontesteffectVarPopFieldsModel.base"

/**
 * PokemonV2SupercontesteffectVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2SupercontesteffectVarPopFieldsModel = PokemonV2SupercontesteffectVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
