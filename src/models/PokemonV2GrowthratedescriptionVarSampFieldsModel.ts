import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionVarSampFieldsModelBase } from "./PokemonV2GrowthratedescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionVarSampFieldsModel */
export interface PokemonV2GrowthratedescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionVarSampFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionVarSampFields, pokemonV2GrowthratedescriptionVarSampFieldsModelPrimitives, PokemonV2GrowthratedescriptionVarSampFieldsModelSelector } from "./PokemonV2GrowthratedescriptionVarSampFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GrowthratedescriptionVarSampFieldsModel = PokemonV2GrowthratedescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
