import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexVarSampFieldsModelBase } from "./PokemonV2PokemongameindexVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexVarSampFieldsModel */
export interface PokemonV2PokemongameindexVarSampFieldsModelType extends Instance<typeof PokemonV2PokemongameindexVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexVarSampFieldsModel */
export { selectFromPokemonV2PokemongameindexVarSampFields, pokemonV2PokemongameindexVarSampFieldsModelPrimitives, PokemonV2PokemongameindexVarSampFieldsModelSelector } from "./PokemonV2PokemongameindexVarSampFieldsModel.base"

/**
 * PokemonV2PokemongameindexVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemongameindexVarSampFieldsModel = PokemonV2PokemongameindexVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
