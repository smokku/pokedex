import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionVarSampFieldsModelBase } from "./PokemonV2ItemattributedescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionVarSampFieldsModel */
export interface PokemonV2ItemattributedescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionVarSampFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionVarSampFields, pokemonV2ItemattributedescriptionVarSampFieldsModelPrimitives, PokemonV2ItemattributedescriptionVarSampFieldsModelSelector } from "./PokemonV2ItemattributedescriptionVarSampFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemattributedescriptionVarSampFieldsModel = PokemonV2ItemattributedescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
