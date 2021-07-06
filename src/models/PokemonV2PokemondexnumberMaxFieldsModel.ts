import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberMaxFieldsModelBase } from "./PokemonV2PokemondexnumberMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberMaxFieldsModel */
export interface PokemonV2PokemondexnumberMaxFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberMaxFieldsModel */
export { selectFromPokemonV2PokemondexnumberMaxFields, pokemonV2PokemondexnumberMaxFieldsModelPrimitives, PokemonV2PokemondexnumberMaxFieldsModelSelector } from "./PokemonV2PokemondexnumberMaxFieldsModel.base"

/**
 * PokemonV2PokemondexnumberMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemondexnumberMaxFieldsModel = PokemonV2PokemondexnumberMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
