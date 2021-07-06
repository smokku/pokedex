import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatMinFieldsModelBase } from "./PokemonV2PokemonstatMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatMinFieldsModel */
export interface PokemonV2PokemonstatMinFieldsModelType extends Instance<typeof PokemonV2PokemonstatMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatMinFieldsModel */
export { selectFromPokemonV2PokemonstatMinFields, pokemonV2PokemonstatMinFieldsModelPrimitives, PokemonV2PokemonstatMinFieldsModelSelector } from "./PokemonV2PokemonstatMinFieldsModel.base"

/**
 * PokemonV2PokemonstatMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonstatMinFieldsModel = PokemonV2PokemonstatMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
