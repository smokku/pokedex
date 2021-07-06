import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberVarSampFieldsModelBase } from "./PokemonV2PokemondexnumberVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberVarSampFieldsModel */
export interface PokemonV2PokemondexnumberVarSampFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberVarSampFieldsModel */
export { selectFromPokemonV2PokemondexnumberVarSampFields, pokemonV2PokemondexnumberVarSampFieldsModelPrimitives, PokemonV2PokemondexnumberVarSampFieldsModelSelector } from "./PokemonV2PokemondexnumberVarSampFieldsModel.base"

/**
 * PokemonV2PokemondexnumberVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemondexnumberVarSampFieldsModel = PokemonV2PokemondexnumberVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
