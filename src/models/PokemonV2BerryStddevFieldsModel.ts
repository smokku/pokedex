import { Instance } from "mobx-state-tree"
import { PokemonV2BerryStddevFieldsModelBase } from "./PokemonV2BerryStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryStddevFieldsModel */
export interface PokemonV2BerryStddevFieldsModelType extends Instance<typeof PokemonV2BerryStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryStddevFieldsModel */
export { selectFromPokemonV2BerryStddevFields, pokemonV2BerryStddevFieldsModelPrimitives, PokemonV2BerryStddevFieldsModelSelector } from "./PokemonV2BerryStddevFieldsModel.base"

/**
 * PokemonV2BerryStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryStddevFieldsModel = PokemonV2BerryStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
