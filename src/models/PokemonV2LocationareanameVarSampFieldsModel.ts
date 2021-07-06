import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameVarSampFieldsModelBase } from "./PokemonV2LocationareanameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameVarSampFieldsModel */
export interface PokemonV2LocationareanameVarSampFieldsModelType extends Instance<typeof PokemonV2LocationareanameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameVarSampFieldsModel */
export { selectFromPokemonV2LocationareanameVarSampFields, pokemonV2LocationareanameVarSampFieldsModelPrimitives, PokemonV2LocationareanameVarSampFieldsModelSelector } from "./PokemonV2LocationareanameVarSampFieldsModel.base"

/**
 * PokemonV2LocationareanameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationareanameVarSampFieldsModel = PokemonV2LocationareanameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
