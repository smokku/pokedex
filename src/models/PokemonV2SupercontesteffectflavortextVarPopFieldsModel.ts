import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextVarPopFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextVarPopFieldsModel */
export interface PokemonV2SupercontesteffectflavortextVarPopFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextVarPopFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextVarPopFields, pokemonV2SupercontesteffectflavortextVarPopFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextVarPopFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextVarPopFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2SupercontesteffectflavortextVarPopFieldsModel = PokemonV2SupercontesteffectflavortextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
