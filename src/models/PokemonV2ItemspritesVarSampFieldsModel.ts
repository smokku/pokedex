import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesVarSampFieldsModelBase } from "./PokemonV2ItemspritesVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesVarSampFieldsModel */
export interface PokemonV2ItemspritesVarSampFieldsModelType extends Instance<typeof PokemonV2ItemspritesVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesVarSampFieldsModel */
export { selectFromPokemonV2ItemspritesVarSampFields, pokemonV2ItemspritesVarSampFieldsModelPrimitives, PokemonV2ItemspritesVarSampFieldsModelSelector } from "./PokemonV2ItemspritesVarSampFieldsModel.base"

/**
 * PokemonV2ItemspritesVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemspritesVarSampFieldsModel = PokemonV2ItemspritesVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
