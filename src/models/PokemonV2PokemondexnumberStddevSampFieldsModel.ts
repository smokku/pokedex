import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberStddevSampFieldsModelBase } from "./PokemonV2PokemondexnumberStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberStddevSampFieldsModel */
export interface PokemonV2PokemondexnumberStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberStddevSampFieldsModel */
export { selectFromPokemonV2PokemondexnumberStddevSampFields, pokemonV2PokemondexnumberStddevSampFieldsModelPrimitives, PokemonV2PokemondexnumberStddevSampFieldsModelSelector } from "./PokemonV2PokemondexnumberStddevSampFieldsModel.base"

/**
 * PokemonV2PokemondexnumberStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemondexnumberStddevSampFieldsModel = PokemonV2PokemondexnumberStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
