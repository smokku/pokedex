import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameVarSampFieldsModelBase } from "./PokemonV2PokemonshapenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameVarSampFieldsModel */
export interface PokemonV2PokemonshapenameVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameVarSampFieldsModel */
export { selectFromPokemonV2PokemonshapenameVarSampFields, pokemonV2PokemonshapenameVarSampFieldsModelPrimitives, PokemonV2PokemonshapenameVarSampFieldsModelSelector } from "./PokemonV2PokemonshapenameVarSampFieldsModel.base"

/**
 * PokemonV2PokemonshapenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonshapenameVarSampFieldsModel = PokemonV2PokemonshapenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
