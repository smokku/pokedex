import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupMaxFieldsModelBase } from "./PokemonV2PokemonegggroupMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupMaxFieldsModel */
export interface PokemonV2PokemonegggroupMaxFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupMaxFieldsModel */
export { selectFromPokemonV2PokemonegggroupMaxFields, pokemonV2PokemonegggroupMaxFieldsModelPrimitives, PokemonV2PokemonegggroupMaxFieldsModelSelector } from "./PokemonV2PokemonegggroupMaxFieldsModel.base"

/**
 * PokemonV2PokemonegggroupMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonegggroupMaxFieldsModel = PokemonV2PokemonegggroupMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
