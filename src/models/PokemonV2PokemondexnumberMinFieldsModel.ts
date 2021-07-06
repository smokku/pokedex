import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberMinFieldsModelBase } from "./PokemonV2PokemondexnumberMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberMinFieldsModel */
export interface PokemonV2PokemondexnumberMinFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberMinFieldsModel */
export { selectFromPokemonV2PokemondexnumberMinFields, pokemonV2PokemondexnumberMinFieldsModelPrimitives, PokemonV2PokemondexnumberMinFieldsModelSelector } from "./PokemonV2PokemondexnumberMinFieldsModel.base"

/**
 * PokemonV2PokemondexnumberMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemondexnumberMinFieldsModel = PokemonV2PokemondexnumberMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
