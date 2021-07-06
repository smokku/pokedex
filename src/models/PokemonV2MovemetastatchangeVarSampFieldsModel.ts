import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeVarSampFieldsModelBase } from "./PokemonV2MovemetastatchangeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeVarSampFieldsModel */
export interface PokemonV2MovemetastatchangeVarSampFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeVarSampFieldsModel */
export { selectFromPokemonV2MovemetastatchangeVarSampFields, pokemonV2MovemetastatchangeVarSampFieldsModelPrimitives, PokemonV2MovemetastatchangeVarSampFieldsModelSelector } from "./PokemonV2MovemetastatchangeVarSampFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetastatchangeVarSampFieldsModel = PokemonV2MovemetastatchangeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
