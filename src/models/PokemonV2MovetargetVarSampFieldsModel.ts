import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetVarSampFieldsModelBase } from "./PokemonV2MovetargetVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetVarSampFieldsModel */
export interface PokemonV2MovetargetVarSampFieldsModelType extends Instance<typeof PokemonV2MovetargetVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetVarSampFieldsModel */
export { selectFromPokemonV2MovetargetVarSampFields, pokemonV2MovetargetVarSampFieldsModelPrimitives, PokemonV2MovetargetVarSampFieldsModelSelector } from "./PokemonV2MovetargetVarSampFieldsModel.base"

/**
 * PokemonV2MovetargetVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovetargetVarSampFieldsModel = PokemonV2MovetargetVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
