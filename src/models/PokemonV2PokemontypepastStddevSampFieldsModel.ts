import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastStddevSampFieldsModelBase } from "./PokemonV2PokemontypepastStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastStddevSampFieldsModel */
export interface PokemonV2PokemontypepastStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemontypepastStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastStddevSampFieldsModel */
export { selectFromPokemonV2PokemontypepastStddevSampFields, pokemonV2PokemontypepastStddevSampFieldsModelPrimitives, PokemonV2PokemontypepastStddevSampFieldsModelSelector } from "./PokemonV2PokemontypepastStddevSampFieldsModel.base"

/**
 * PokemonV2PokemontypepastStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemontypepastStddevSampFieldsModel = PokemonV2PokemontypepastStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
