import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameVarSampFieldsModelBase } from "./PokemonV2PalparkareanameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameVarSampFieldsModel */
export interface PokemonV2PalparkareanameVarSampFieldsModelType extends Instance<typeof PokemonV2PalparkareanameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameVarSampFieldsModel */
export { selectFromPokemonV2PalparkareanameVarSampFields, pokemonV2PalparkareanameVarSampFieldsModelPrimitives, PokemonV2PalparkareanameVarSampFieldsModelSelector } from "./PokemonV2PalparkareanameVarSampFieldsModel.base"

/**
 * PokemonV2PalparkareanameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PalparkareanameVarSampFieldsModel = PokemonV2PalparkareanameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
