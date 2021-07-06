import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketVarSampFieldsModelBase } from "./PokemonV2ItempocketVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketVarSampFieldsModel */
export interface PokemonV2ItempocketVarSampFieldsModelType extends Instance<typeof PokemonV2ItempocketVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketVarSampFieldsModel */
export { selectFromPokemonV2ItempocketVarSampFields, pokemonV2ItempocketVarSampFieldsModelPrimitives, PokemonV2ItempocketVarSampFieldsModelSelector } from "./PokemonV2ItempocketVarSampFieldsModel.base"

/**
 * PokemonV2ItempocketVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItempocketVarSampFieldsModel = PokemonV2ItempocketVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
