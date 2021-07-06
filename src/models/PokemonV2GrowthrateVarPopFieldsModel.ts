import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateVarPopFieldsModelBase } from "./PokemonV2GrowthrateVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateVarPopFieldsModel */
export interface PokemonV2GrowthrateVarPopFieldsModelType extends Instance<typeof PokemonV2GrowthrateVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateVarPopFieldsModel */
export { selectFromPokemonV2GrowthrateVarPopFields, pokemonV2GrowthrateVarPopFieldsModelPrimitives, PokemonV2GrowthrateVarPopFieldsModelSelector } from "./PokemonV2GrowthrateVarPopFieldsModel.base"

/**
 * PokemonV2GrowthrateVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GrowthrateVarPopFieldsModel = PokemonV2GrowthrateVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
