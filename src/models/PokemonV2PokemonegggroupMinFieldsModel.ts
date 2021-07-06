import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupMinFieldsModelBase } from "./PokemonV2PokemonegggroupMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupMinFieldsModel */
export interface PokemonV2PokemonegggroupMinFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupMinFieldsModel */
export { selectFromPokemonV2PokemonegggroupMinFields, pokemonV2PokemonegggroupMinFieldsModelPrimitives, PokemonV2PokemonegggroupMinFieldsModelSelector } from "./PokemonV2PokemonegggroupMinFieldsModel.base"

/**
 * PokemonV2PokemonegggroupMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonegggroupMinFieldsModel = PokemonV2PokemonegggroupMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
